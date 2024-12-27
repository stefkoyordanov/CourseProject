render: function (data, type) {
    if (type === 'display') {
        let country = '';

        switch (data) {
            case 'Argentina':
                country = 'ar';
                break;
            case 'Edinburgh':
                country = '_Scotland';
                break;
            case 'London':
                country = '_England';
                break;
            case 'New York':
            case 'San Francisco':
                country = 'us';
                break;
            case 'Sydney':
                country = 'au';
                break;
            case 'Tokyo':
                country = 'jp';
                break;
        }

        return '<span class="flag ' + country + '"></span> ' + data;
    }

    return data;
}