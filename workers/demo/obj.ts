import { z } from "zod"

type Obj = {
    id: number,
    name: string,
    email: string | null,
}
interface Obj2 {
    name: string
}


let obj1: Obj = {
    id: 1,
    name: 'Aradhya',
    // email: null,
    hemp: "Glorine"
}
let zObj = z.object({
    name: z.string(),
    id: z.number(),
    email: z.string().nullable()
})
zObj
let objCh = zObj.safeParse(obj1)
let objParsedData = objCh.error?.flatten()
console.log("Child Object", objParsedData || objCh.data)
console.log("parent Object", obj1)
