var projectName = "ifoods-explorer-home"

/**
 * 时间戳转换
 * @param timestamp
 * @returns {*}
 */
function timestampToTime(timestamp) {
	var date = new Date(timestamp * 1000);
	Y = date.getFullYear() + '-';
	M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
	D = date.getDate() + ' ';
	h = date.getHours() + ':';
	m = date.getMinutes() + ':';
	s = date.getSeconds();
	return Y+M+D+h+m+s;
}

/**
 * block height deatail info
 * @param height
 */
function heightDetail(height) {
	window.location.href='/'+projectName+'/html/block-info.html?height=' + height;
}


/**
 *
 */
function getQueryString(name) {
	/*var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;*/
	paramValue = "", isFound = !1;
	if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
		arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
		while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == name.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
	}
	return paramValue == "" && (paramValue = null), paramValue
}

function txOnclickByhash(txhash) {
	window.location.href='/'+projectName+'/html/tx-info.html?hash=' + txhash;
}

function toIndex() {
	window.location.href='/'+projectName+'/index.html';
}
