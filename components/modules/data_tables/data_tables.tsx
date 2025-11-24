import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { Athlete_Athletelayout_PageBuilder_DataTables } from 'interfaces/types'
import Button from 'components/generic/button/button'
import dynamic from 'next/dynamic'
import styles from './data_tables.module.scss'

const DataTableCheck = dynamic(() => import('components/svg/dataTableCheck'))
const DataTableMinus = dynamic(() => import('components/svg/dataTableMinus'))

export const typename = 'Flexiblelayout_PageBuilder_DataTables'

const DataTablesModule: FunctionComponent<{ module: Athlete_Athletelayout_PageBuilder_DataTables }> = ({ module }) => {
  const { headline, headline1, headline2, headline3, copy, link, rows, spacing, tableStyle } = module

  const hasFirstValue = rows?.some((row) => row?.firstValue || row?.firstChecked) || false
  const hasSecondValue = rows?.some((row) => row?.secondValue || row?.secondChecked) || false
  const isTextTable = tableStyle === 'text'
  const singleValue = (!hasFirstValue && hasSecondValue) || (hasFirstValue && !hasSecondValue)

  return (
    <div className={cn(styles.root, `container spacing-${spacing}`)}>
      <div className="default-grid">
        {(headline || copy || link) && (
          <div className={cn(styles.headlineContainer)}>
            {headline && <h3 className={cn(styles.headline)}>{headline}</h3>}
            {copy && <span className={cn(styles.copy)}>{copy}</span>}
            <Button
              className={cn(styles.button)}
              link={link}
              variant="secondary"
            />
          </div>
        )}
        {(headline1 || headline2 || headline3) && (
          <div className={cn(styles.row, styles.headingRow)}>
            <span className={cn(styles.label, !singleValue && styles.hasTwoValues)}>{headline1 && headline1}</span>
            {hasFirstValue && (
              <span className={cn(styles.value, singleValue ? styles.singleValue : styles.doubleValue)}>
                {headline2 && headline2}
              </span>
            )}
            {hasSecondValue && (
              <span className={cn(styles.value, singleValue ? styles.singleValue : styles.doubleValue)}>
                {headline3 && headline3}
              </span>
            )}
          </div>
        )}
        {rows &&
          rows.length > 0 &&
          rows.map((row) => (
            <div
              className={cn(styles.row)}
              key={row.label}
            >
              <span className={cn(styles.label, !singleValue && styles.hasTwoValues)}>{row?.label}</span>
              {hasFirstValue && (
                <span className={cn(styles.value, singleValue ? styles.singleValue : styles.doubleValue)}>
                  {isTextTable && row?.firstValue}
                  {!isTextTable && (row?.firstChecked ? <DataTableCheck /> : <DataTableMinus />)}
                </span>
              )}
              {hasSecondValue && (
                <span className={cn(styles.value, singleValue ? styles.singleValue : styles.doubleValue)}>
                  {isTextTable && row?.secondValue}
                  {!isTextTable && (row?.secondChecked ? <DataTableCheck /> : <DataTableMinus />)}
                </span>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}

export default DataTablesModule
