const base_url = "https://api.spotify.com/v1";

export function fetch_data(url, callback, onError) {
    const headers = new Headers({
        'Accept': 'application/json'
    });
    fetch_with_headers(url, callback, onError, headers);
}

export function get_cookie(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

export function fetch_authorized_data(url, callback, onError) {
    const headers = new Headers({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + get_cookie('access_token')
    });
    fetch_with_headers(url, callback, onError, headers);
}

export function fetch_with_headers(url, callback, onError, headers) {
    const options = {
        headers: headers
    };
    fetch(base_url + url, options).then(response => {
        return response.json();
    }).then(data => {
        callback(data);
    }).catch(onError);
}

