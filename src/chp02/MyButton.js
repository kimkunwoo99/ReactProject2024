function MyButton(props){
    const [isclicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
         {
            onclick: () => setIsClicked(true)
    },
         isclicked ? 'Clicked' : 'Click here~~'
    )
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MyButton));