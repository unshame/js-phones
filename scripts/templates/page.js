export default function template(data) {
    return `
        <div class="row">
            <!--Sidebar-->
            <div class="col-md-2">
                <div ${data.filter}></div>
        
                <section>
                    <p>Shopping Cart</p>
                    <ul>
                        <li>Phone 1</li>
                        <li>Phone 2</li>
                        <li>Phone 3</li>
                    </ul>
                </section>
            </div>
        
            <!--Main content-->
            <div class="col-md-10">
                <div ${data.catalog}></div>
                <div ${data.viewer}></div>
            </div>
        </div>`
}