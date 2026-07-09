import { state } from "../state.js";

import { Input } from "../components/input.js";

import { Textarea } from "../components/textarea.js";

export function Restaurant(){

    const page = document.createElement("div");

    page.className = "page";

    const info = state.menu.info;

    page.append(

        Input(

            "Restaurant Name",

            info.name,

            value => {

                info.name = value;

                

            }

        ).element,

        Textarea(

            "Description",

            info.description,

            value => {

                info.description = value;

                

            }

        ),

        Input(

            "Phone",

            info.phone,

            value => {

                info.phone = value;

                

            }

        ).element,

        Input(

            "Address",

            info.address,

            value => {

                info.address = value;

                

            }

        ).element,

        Input(

            "Instagram",

            info.instagram,

            value => {

                info.instagram = value;

                

            }

        ).element

    );

    return page;

}