import { getMenu } from "../state.js";

export function CategoryBar(){

    const menu = getMenu();

    const nav = document.createElement("nav");

    nav.className = "categories";

    for(const category of menu.categories){

        const button = document.createElement("button");

        button.textContent = category.name;

        button.onclick = ()=>{

            document
                .getElementById(category.id)
                ?.scrollIntoView({

                    behavior:"smooth"

                });

        };

        nav.append(button);

    }

    return nav;

}