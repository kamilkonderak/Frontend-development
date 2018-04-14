class CloudService{
    constructor(public name:string, public price: number, public description?:string)
    {
        this.name=name
        this.price=price
        this.description=description
    }
}
 class ComputingService extends CloudService
 {
     
 }

//let ComputingService = new CloudService ("Computing service", 1200, "Buy computing power")
let MachineLearning = new CloudService ("Machine Learning", 100, "USe Machine learning to solve problems")
let WebHost = new CloudService("Web Host", 10)

function describeService(service: CloudService)
{
    console.log("Service name: " + service.name + "\n Price: " + service.price)
        if(service.description!=null)
        {
            console.log("Service description: " + service.description)
        }
}

//describeService(ComputingService)
describeService(WebHost)

function addService(tag, name:string, price:number, description?:string)
{
    tag = new CloudService(name,price,description);
    describeService(tag)
}

addService("test", "test", 20, "blabla")

//describeService(test)