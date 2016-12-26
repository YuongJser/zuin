export class publics{
    constructor(){
        
    }

    deep(b, c){
        // 深度copy对象，参数1为原对象，参数二为新对象或原有待copy对象
        var c = c || {};
        for(var i in p){
            if(typeof p[i] === 'object'){
                c[i] = (p[i].constructor === Array) ? [] : {};
                this.deep(p[i], c[i]);
            }else{
                c[i] = p[i];
            }
        }
        return c;
    }
}