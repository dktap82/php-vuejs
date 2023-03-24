function getDynamicHost() {
  let protocol = window.location.protocol
  let hostname = window.location.hostname
  let port = window.location.port
  let host

  if (protocol === 'https:') {
    if (port) {
      host = `${hostname}:${port}`
    } else {
      host = hostname
    }
  } else {
    if (port) {
      host = `${hostname}:${port}`
    } else {
      host = `${hostname}:80`
    }
  }

  return host
}

var host = getDynamicHost()

var includeScript = [
	'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
	'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
	'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js',
	'https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js',
	'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-vue/2.23.1/bootstrap-vue.min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/axios/1.2.6/axios.min.js',
	'https://cdn.jsdelivr.net/npm/http-vue-loader@1.3.4/src/httpVueLoader.js'
]

var script

includeScript.forEach( el => {
	script = document.createElement('script')
	script.src = el
	script.async = false
	document.head.appendChild(script)
})