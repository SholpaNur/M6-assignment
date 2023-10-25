const $ = (id) => document.getElementById(id)

let clicked = (e) => {
    let id = $('id'), nm = $('name'), ext = $('ext'), email = $('email'), department = $('department');
    let idv = id.value, namev = nm.value, extv = ext.value, emailv = email.value;
    if (
        idv !== undefined && idv.length === 8 &&
        namev !== undefined && namev.length > 0 &&
        extv !== undefined && extv.length === 4 &&
        emailv !== undefined && emailv.length > 0
    ) {
        console.log(`ID: ${idv}\nName: ${namev}\nExtension: ${extv}\nEmail: ${emailv}\nDepartment: ${department.value}`);
    } else {
        e.stopPropagation();
        e.preventDefault();
    }
}
window.addEventListener('load', () => {
    let form = $('empForm');
    form.addEventListener('submit', clicked)
})
