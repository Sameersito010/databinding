import { Component, OnInit } from "@angular/core";
import { Iskill } from "../interface";


@Component({
    selector:"app-tab",
    templateUrl:"./tab.component.html",
    styleUrls:["./tab.component.scss"]
})
export class TabComponent implements OnInit{

    selectSkillSet:string="Javascript";
    // selectSkillSet:string="angular";
    apparry:Array<Iskill>=[{
        Aname:"javascript",
        content:"<strong>javascript</strong> Angular is a TypeScript-based, free and open-source single-page webapplication framework led by the Angular Team at Google and by a community of individuals and corporations.  Angular is a complete rewrite from the same team that built AngularJS."
      },
      {
        Aname:"angular",
        content:"<strong>angular</strong> Angular is a TypeScript-based, free and open-source single-page webapplication framework led by the Angular Team at Google and by a community of individuals and corporations.  Angular is a complete rewrite from the same team that built AngularJS."
      },
      {
        Aname:"typescript",
        content:"<strong>typescript</strong> TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript."
      },
      {
        Aname:"node",
        content:"<strong>node</strong> Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting."
      },
      {
        Aname:"css",
        content:"<strong>css</strong> Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript"
      },{
        Aname:"sass",
        content:"<strong>sass</strong> Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called the indented syntax, uses a syntax similar to Haml."
      }
      ]
skill: any;

    ngOnInit(): void {
  
        }
        selectSkill(skill:string){
            console.log(skill)
            this.selectSkillSet=skill
       
    }

}