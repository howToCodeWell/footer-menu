import menu from '../menu'
import React, {Component} from 'react';

class FooterMenu extends Component {

    render() {
        return (
            <footer className="flex justify-between">
                <nav id="menuMenu" className="container mx-auto px-4 ">

                    <div className="flex-none justify-between sm:flex ">

                        <div className="flex-none sm:flex-1 md:flex-auto">
                            <ul>
                                {menu.left.map((item, key) =>
                                    <li key={'li-' + key}><a key={key}
                                           className="block mt-4 font-bold lg:inline-block lg:mt-0 text-pink-600 hover:underline mr-4"
                                           href={item.url}>{item.name}</a></li>
                                )}
                            </ul>
                        </div>

                        <div className="flex-none sm:flex-1 md:flex-auto">
                            <ul>
                                {menu.middle.map((item, key) =>
                                    <li key={'li-' + key}><a key={key}
                                           className="block mt-4 font-bold lg:inline-block lg:mt-0 text-pink-600 hover:underline mr-4"
                                           href={item.url}>{item.name}</a></li>
                                )}
                            </ul>
                        </div>

                        <div className="flex-none sm:flex-1 md:flex-auto">
                            <ul>
                                {menu.right.map((item, key) =>
                                    <li key={'li-' + key}><a key={key}
                                           className="block mt-4 font-bold lg:inline-block lg:mt-0 text-pink-600 hover:underline mr-4"
                                           href={item.url}>{item.name}</a></li>
                                )}
                            </ul>
                        </div>

                    </div>
                </nav>
            </footer>
        )
    }
}

export default FooterMenu;