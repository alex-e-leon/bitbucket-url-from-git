// convert git:// form url to bitbucket URL, e.g.,
// git://bitbucket.com/bcoe/foo.git
// https://bitbucket.com/bcoe/foo.
function bitbucketUrlFromGit (url, opts) {
  try {
    var urlNoExt = url.replace(/\.git(#.*)?$/, '')
    var snippetMatch = snippetRe(opts).exec(urlNoExt)

    if (snippetMatch) {
      return 'https://' + snippetMatch[1] + '/snippets/' + snippetMatch[2]
    }

    var match = re(opts).exec(urlNoExt)
    return 'https://' + match[1] + '/' + match[2]
  } catch (_err) {
    // ignore
  }
}

var protocolRe = /^(?:https?:\/\/|git:\/\/|git\+ssh:\/\/|git\+https:\/\/)?(?:[^@]+@)?/

// generate the git:// parsing regex
// with options, e.g., the ability
// to specify multiple GHE domains.
function re (opts) {
  opts = opts || {}
  // whitelist of URLs that should be treated as GitHub repos.
  var baseUrls = ['bitbucket.org'].concat(opts.extraBaseUrls || [])
  // build regex from whitelist.
  return new RegExp(
    protocolRe.source +
    '(' + baseUrls.join('|') + ')' +
    /(?::\/?|\/)([^/]+\/[^/]+?)$/.source
  )
}

function snippetRe (opts) {
  opts = opts || {}
  // whitelist of URLs that should be treated as GitHub repos.
  var baseUrls = ['bitbucket.org'].concat(opts.extraBaseUrls || [])
  // build regex from whitelist.
  return new RegExp(
    protocolRe.source +
    '(' + baseUrls.join('|') + ')' +
    /(?::\/?|\/)snippets\/([^/]+\/[^/]+)\/[^/]+$/.source
  )
}

module.exports = bitbucketUrlFromGit
