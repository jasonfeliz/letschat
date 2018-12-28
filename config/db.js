'use strict'

const baseName = 'chatDB'

const database = {
  development: `mongodb://localhost/${baseName}-development`,
  test: `mongodb://localhost/${baseName}-test`
}

const localDb = database.development

module.exports = localDb
