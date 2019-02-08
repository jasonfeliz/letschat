'use strict'

const baseName = 'chatDB'

const database = {
  development: `mongodb://localhost/${baseName}-development`,
  test: `mongodb://localhost/${baseName}-test`
}

const localDb = database.development

const currentDb = process.env.MONGODB_URI || localDb


module.exports = currentDb
