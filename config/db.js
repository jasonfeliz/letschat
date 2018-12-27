'use strict'

const baseName = 'chatDB'

const database = {
  development: `mongodb://http:localhost/${baseName}-development`,
  test: `mongodb://http:localhost/${baseName}-test`
}

const localDb = process.env.TESTENV ? database.test : database.development

module.exports = localDb
