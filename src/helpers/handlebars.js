const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {


        const sortType = field === sort.column ? sort.type : 'default';

        const types = {
            default: 'desc',
            desc: 'asc',
            asc: 'desc',
        };

        const type = types[sortType];

        const icons = {
            default: 'fa-solid fa-sort',
            asc: 'fa-solid fa-arrow-down-a-z',
            desc: 'fa-solid fa-arrow-down-z-a'
        };

        const icon = icons[sortType] || icons['default'];

        const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`)

        const output = `<a href="${href}">
            <i class="${icon}"></i>
        </a>`;

        return new Handlebars.SafeString(output);


    }
}