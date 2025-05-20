export default function Item({item}) {

return(

    <main className=" bg-red-800 m-5 p-2 w-50 rounded-2xl ">
        <h2>Name: {item.name}</h2>
        <p>Quantity: {item.quantity}</p>
        <p>Category: {item.category}</p>
    </main>

);


}