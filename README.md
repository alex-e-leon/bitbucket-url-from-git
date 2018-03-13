
# bitbucket-url-from-git

Blatantly ripped off [tj/node-github-url-from-git](https://github.com/tj/node-github-url-from-git)
But tweaked for bitbucket urls


```js
describe('parse(url)', function () {
  it('should support git://*', function () {
    var url = 'git@bitbucket.org:alex-e-leon/node-bitbucket-url-from-git.git'
    parse(url).should.eql('https://bitbucket.org/alex-e-leon/node-bitbucket-url-from-git')
  })

  it('should support git://*.git', function () {
    var url = 'git://bitbucket.org/alex-e-leon/node-bitbucket-url-from-git.git'
    parse(url).should.eql('https://bitbucket.org/alex-e-leon/node-bitbucket-url-from-git')
  })

  it('should support https://*', function () {
    var url = 'https://bitbucket.org/alex-e-leon/node-bitbucket-url-from-git'
    parse(url).should.eql('https://bitbucket.org/alex-e-leon/node-bitbucket-url-from-git')
  })

  it('should support https://*.git', function () {
    var url = 'https://alex@bitbucket.org/alex-e-leon/node-bitbucket-url-from-git.git'
    parse(url).should.eql('https://bitbucket.org/alex-e-leon/node-bitbucket-url-from-git')
  })

  it('should return undefined on failure', function () {
    var url = 'git://bitbucket.org/alex-e-leon/.git'
    assert(parse(url) == null)
  })

  it('should parse git@bitbucket.org:/alex-e-leon/node-bitbucket-url-from-git.git', function () {
    var url = 'git@bitbucket.org:/alex-e-leon/node-bitbucket-url-from-git.git'
    parse(url).should.eql('https://bitbucket.org/alex-e-leon/node-bitbucket-url-from-git')
  })

  it('should parse git@github.com:bcoe/thumbd.git#2.7.0', function () {
    var url = 'git@bitbucket.org:alex-e-leon/node-bitbucket-url-from-git.git#2.7.0'
    parse(url).should.eql('https://bitbucket.org/alex-e-leon/node-bitbucket-url-from-git')
  })

  it('should parse git+https://bitbucket.org/alex-e-leon/node-bitbucket-url-from-git.git', function () {
    var url = 'git+https://bitbucket.org/alex-e-leon/node-bitbucket-url-from-git.git'
    parse(url).should.eql('https://bitbucket.org/alex-e-leon/node-bitbucket-url-from-git')
  })

  it('should parse git+ssh://bitbucket.org/alex-e-leon/node-bitbucket-url-from-git.git', function () {
    var url = 'git+ssh://bitbucket.org/alex-e-leon/node-bitbucket-url-from-git.git'
    parse(url).should.eql('https://bitbucket.org/alex-e-leon/node-bitbucket-url-from-git')
  })

  // snippet urls.

  it('should parse git@ snippet urls', function () {
    var url = 'git@bitbucket.org:snippets/alex-e-leon/nepk84/a-snippet.git'
    parse(url).should.equal('https://bitbucket.org/snippets/alex-e-leon/nepk84')
  })

  it('should parse https://gist urls', function () {
    var url = 'https://alex@bitbucket.org/snippets/alex-e-leon/nepk84/a-snippet.git'
    parse(url).should.equal('https://bitbucket.org/snippets/alex-e-leon/nepk84')
  })

  // Handle arbitrary GitHub Enterprise domains.

  it('should parse parse extra bitbucket enterprise urls provided', function () {
    var url = 'git://bitbucket.example.com/alex-e-leon/node-bitbucket-url-from-git.git'
    parse(
      url, {extraBaseUrls: ['bitbucket.example.com']}
    ).should.equal('https://bitbucket.example.com/alex-e-leon/node-bitbucket-url-from-git')
  })

  it('should parse bitbucket enterprise urls with multiple subdomains', function () {
    var url = 'git://bitbucket.internal.example.com/alex-e-leon/node-bitbucket-url-from-git.git'
    parse(
      url, {extraBaseUrls: ['bitbucket.internal.example.com']}
    ).should.equal('https://bitbucket.internal.example.com/alex-e-leon/node-bitbucket-url-from-git')
  })
})
```
