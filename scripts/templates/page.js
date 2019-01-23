export default function template() {
    return `
        <div class="row">
            <!--Sidebar-->
            <div class="col-md-2">
                <section data-component="filter"></section>
        
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
                <div data-component="catalog"></div>
                <div data-component="viewer"></div>
            </div>
        </div>`
}