export async function users(userName,setState){
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const jsonData = await response.json();
    setState(jsonData)
}