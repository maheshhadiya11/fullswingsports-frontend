import React, { useEffect, useState } from 'react'
import gql from 'cms/client'
import { usePathname } from 'next/navigation'
import styles from './cartIcon.module.scss'
import CartQuery from './cart.query'
import Button from '../button/button'

const getCart = async () => {
  return (await gql(CartQuery)).data
}

const CartIcon = ({ cartLink, closeMenu }: { cartLink: string; closeMenu: (boolean: boolean) => void }) => {
  const [cartCount, setCartCount] = useState(0)
  const [sessionCartLink, setSessionLink] = useState(`${cartLink || '/cart'}`)

  const updateCart = async () => {
    const cart = await getCart()
    setCartCount(cart?.cart?.contents?.itemCount ?? 0)
    setSessionLink(`${cartLink || '/cart'}?session_id=${window.localStorage.getItem('woo-cart-session')}`)
  }

  const route = usePathname()

  useEffect(() => {
    updateCart()
  }, [route])

  return (
    <div className={styles.root}>
      <Button
        link={{
          target: '',
          title: 'Cart',
          url: sessionCartLink,
        }}
        icon="shop"
        variant="icon"
        className={styles.button}
        onClick={() => closeMenu(true)}
      />
      {cartCount > 0 && <div className={styles.dot}>{cartCount}</div>}
    </div>
  )
}

export default CartIcon
