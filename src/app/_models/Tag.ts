export class Tag {
static readonly ANGULAR = new Tag('Angular', 'red');
static readonly TYPESCRIPT = new Tag('Typescript', 'darkred');
static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
static readonly NODEJS = new Tag('Node.JS', 'brown');
static readonly PYTHON = new Tag('Node.JS', 'blue');
static readonly REACT = new Tag('Node.JS', 'blue');
static readonly ASPNET = new Tag('Node.JS', 'green');
static readonly CSHARP = new Tag('Node.JS', 'yellow');


    key: any;



private constructor(private readonlykey: string, public readonly color: string) {

}

toString() {
    return this.key;
}

}