function exampleFunction() {
    let region_finder = prompt("enter your timezone GMT OR UTC with + or - hours -> examples: GMT+13 / UTC-4 ")
    
    if(region_finder == "GMT" || region_finder == "UTC") {
        gmtifier()
        time()
    }

    if(region_finder == "GMT+1" || region_finder == "UTC+1") {
        aGmtifier()
        atime()
    }
}