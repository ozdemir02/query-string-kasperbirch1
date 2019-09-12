document.addEventListener("DOMContentLoaded", () => {

    let params = new URLSearchParams(document.location.search);
    let destination = params.get("destination_id")
    console.log(destination);
});
