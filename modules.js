'use strict'

const fs = require('fs')
const path = require('path')
const paths = require('./paths')
const chalk = require('react-dev-utils/chalk')
const resolve = require('resolve')

const removeWildcardPart = p => p.replace('/*', '')
// converts "src/components/*" to "src/components"

// ...

function getWebpackAliases(options = {}) {
	const baseUrl = options.baseUrl
	
	if (!baseUrl) {
		return {}
	}
	
	let resultAlias = { src: paths.appSrc }
	
	return Object.assign({}, resultAlias,
		Object.keys(options.paths).reduce(
			(obj, alias) => {
				obj[removeWildcardPart(alias)] =
					options.paths[alias].map(removeWildcardPart)[0]
				return obj
			}, {}
		)
	)
}

// ...

function getJestAliases(options = {}) {
	const baseUrl = options.baseUrl
	
	if (!baseUrl) {
		return {}
	}
	
	let resultAlias = { '^src/(.*)$': '<rootDir>/src/$1' }
	
	return Object.assign({}, resultAlias,
		Object.keys(options.paths).reduce(
			(obj, alias) => {
				obj[`^${ removeWildcardPart(alias) }(.*)$`] =
					options.paths[alias]
						.map(p => `<rootDir>/src/${ removeWildcardPart(p) }/$1`)
				return obj
			}, {}
		)
	)
}
