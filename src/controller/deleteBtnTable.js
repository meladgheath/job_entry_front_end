import MyUrl from "./url";

const deleteBtn = (id) => {


    fetch(MyUrl + '/tas/' + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(result => {
            if (result.success)
                alert('the element with id ' + id + ' was removed successfuly')
            else
                throw new Error(result.message)
        }).catch((err) =>
        alert(err.message));

}

export default deleteBtn