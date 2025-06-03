export const spotifyAPI = async(url, method, body, token) => {
    const response = await fetch(url, {
        method: method,
        headers:{
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
        body: body ?? null
    });
    if(response.ok){
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return await response.json();
        }
        return null;
    }else{
        console.error(response.status, response.statusText);
        return null;
    }
}