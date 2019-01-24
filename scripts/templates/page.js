export default function template(data) {
    return `
        <div class="row">
            <!--Sidebar-->
            <div class="col-md-2">
                <div ${data.filter}></div>
        
                <div ${data.minicart}>

                </div>
            </div>
        
            <!--Main content-->
            <div class="col-md-10">
                <div ${data.catalog}></div>
                <div ${data.fullview}></div>
            </div>
        </div>`
}