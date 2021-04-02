
export const getUrlKey = function(name) {	
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href)||["",""])[1].replace(/\+/g, '%20')) 
}



export const getSK = () => {
  const token = localStorage.getItem('trialfund_sk');
  if (token) return token
  else return false
}