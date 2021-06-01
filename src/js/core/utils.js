export const request = (url, method = "GET", data = {}, headers = {}) => {

    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open(method, url, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        if (Object.keys(headers).length) {
            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            })

        }

        xhr.onload = function () {
            resolve(xhr)

        };
        xhr.onerror = function () {

            reject(xhr)
            // if (this.readyState != 4) return;
            //
            // onError( this.responseText );
        }

        xhr.send(data);

    })


}


export const img = (src, classes, alt, base='/images/placeholder.png') => `<img src="${ base }" data-src="${ src }" class="lazyload ${classes} " alt="${alt}"/>`