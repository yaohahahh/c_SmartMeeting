
H.ajax = function (attr) {
    var options = H.merge(true, {
            url: false,
            type: 'GET',
            dataType: 'json',
            success: false,
            error: false,
            data: false,
            headers: {}
        }, attr),
        headers = {
            json: 'application/json',
            xml: 'application/xml',
            text: 'text/plain',
            octet: 'application/octet-stream'
        },
        r = new XMLHttpRequest();

    function handleError(xhr, err) {
        if (options.error) {
            options.error(xhr, err);
        } else {

        }
    }

    if (!options.url) {
        return false;
    }

    r.open(options.type.toUpperCase(), options.url, true);
    r.setRequestHeader(
        'Content-Type',
        headers[options.dataType] || headers.text
    );

    H.objectEach(options.headers, function (val, key) {
        r.setRequestHeader(key, val);
    });

    r.onreadystatechange = function () {
        var res;

        if (r.readyState === 4) {
            if (r.status === 200) {
                res = r.responseText;
                if (options.dataType === 'json') {
                    try {
                        res = JSON.parse(res);
                    } catch (e) {
                        return handleError(r, e);
                    }
                }
                return options.success && options.success(res);
            }

            handleError(r, r.responseText);
        }
    };

    try {
        options.data = JSON.stringify(options.data);
    } catch (e) {}

    r.send(options.data || true);
};
