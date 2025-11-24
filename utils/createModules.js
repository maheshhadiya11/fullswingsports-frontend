const fetch = require('isomorphic-fetch')
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({ path: `${__dirname}/../.env.local` })

const { execSync } = require('child_process')

const createBlocks = (blockNames) => {
  blockNames.forEach((blockName) => {
    execSync(`echo "n" | yarn hygen module new ${blockName}`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
      }
      console.log(`stdout: ${stdout}`)
    })
  })
}

const query = `
  query Types {
    __type(name: "Page_Flexiblelayout_PageBuilder") {
      possibleTypes {
        name
      }
    }
  }
`

const main = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/graphql`, {
    method: 'POST',
    body: JSON.stringify({
      query,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json())
  const types = res.data?.__type?.possibleTypes
  if (!types) {
    return console.log('type for Page_Flexiblelayout_PageBuilder not found')
  }
  const blocks = types.map((i) => i.name.replace('Page_Flexiblelayout_PageBuilder_', ''))
  return createBlocks(blocks)
}

main()
