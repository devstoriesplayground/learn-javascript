// switch case is used to evaluate an expression and execute the corresponding body that matches the expression result 



function connectionType(type) {
  switch (type) {
     case "5G":
        console.log("5G")
        break
     case "4G":
       console.log("4G")
       break
     case "3G":
       console.log("3G")
       break
     case "WiFi":
       console.log("WiFi")
       break
     default:
       console.log("No connection")
       break
  }
  
}

connectionType("2G")
connectionType("5G")
connectionType("3G")