import { Component } from "react";

export default class Toggle extends Component {
  state = {
    showText: false,
  };

  open = () => {
    this.setState({});
  };

  close = () => {
    this.setState({
      showText: false,
    });
  };

  toggle = () => {
    this.setState({});
  };

  closeEverything = () => {
    this.setState({
      showText: false,
    });
  };

  toggleShowText = () => {
    // Need to close all filter text
    this.closeEverything();
    // Need to toggle .this plate
    this.setState({
      showText: !this.state.showText,
    });
  };

  render() {
    const { children } = this.props;
    return children({
      showText: this.state.showText,
      open: this.open,
      close: this.close,
      toggle: this.toggle,
      closeEverything: this.closeEverything,
      toggleShowText: this.toggleShowText,
    });
  }
}

// Pashaa Componentaa jaaliek kur tas viss notiksies!! ------------------------------------------

// <Toggle>
//   {({ showText, toggleShowText }) => (
//     <>
//       {showText && <h1>Clicked</h1>}
//       <Component>
//         <Title
//           text="PAPAKALPOJUMI"
//           title="KO MĒS PIEDĀVĀJAM"
//           shadow="PAKALPOJUMI"
//         />
//         <SelectOffer>
//           <First
//             onMouseEnter={toggleShowText}
//             onMouseLeave={toggleShowText}
//           >
//             <Article>
//               <h3>Projektēšana</h3>
//               <p>
//                 Sed a metus ante. Aenean id ipsum nec nisi sagittis rhoncus.
//                 Aenean est turpis, efficitur in euismod nec, molestie a
//                 metus. Donec vehicula rhoncus dui, non porta leo dictum
//                 vehicula. Morbi tristique mattis efficitur.
//               </p>
//               <Btn2 href="/">Lasīt vairāk</Btn2>
//             </Article>
//           </First>
//           <Second>
//             <h3>Dokumentācijas</h3>
//           </Second>
//           <Third>
//             <h3>Inženiertīklu projektēšana</h3>
//           </Third>
//           <Fourth>
//             <h3>Pakalpojums nr.4</h3>
//           </Fourth>
//           <Fifth>
//             <h3>Pakalpojums nr.5</h3>
//           </Fifth>
//         </SelectOffer>
//       </Component>
//     </>
//   )}
// </Toggle>
