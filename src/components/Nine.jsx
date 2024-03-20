import Footer from "./Footer";
import Nav from "./Nav";
import pic1 from '../assets/Img9.jpg';
import "./Nine.css";

function Nine() {
  return (
    <>  <div className="body">
        <Nav />
        <h1 className="topname">STM32 Nucleo boards</h1>
        <img className="topimg1" src={pic1} alt="" />

       <div className="allone">
        <div className="left">
          <h2 className="titleone">
          Defination<br />  <br />
          <br />  <br />  <br />  <br />
      Features 
        
          </h2>
       
        </div>
       <div className="line"></div>
        <div className="right">

<p className="onemain">The STM32 Nucleo board provides an affordable and flexible way for users to try out new ideas and build prototypes with any STM32 microcontroller line, choosing from the various combinations of performance, power consumption and features. The Arduino™ connectivity support and ST Morpho headers make it easy to expand the functionality of the STM32 Nucleo open development platform with a wide choice of specialized shields. The STM32 Nucleo board does not require any separate probe as it integrates the ST-LINK/V2-1 debugger/programmer.
<br />
<br /><br />

Two types of extension resources  <br />
Arduino Uno Revision 3 connectivity   <br />
STMicroelectronics Morpho extension pin headers for full access to all STM32 I/Os   <br />
On-board ST-LINK/V2-1 debugger/programmer with SWD connector   <br />
Selection-mode switch to use the kit as a standalone ST-LINK/V2-1   <br />
Flexible board power supply   <br />
USB VBUS or external source (3.3 V, 5 V, 7 - 12 V)    <br />
Power management access point   <br />
User LED (LD2)   <br />
Two push buttons: USER and RESET    <br />
USB re-enumeration capability: three different interfaces supported on USB   <br />
Virtual Com port    <br />
Mass storage (USB Disk drive) for drag'n'drop programming  Debug port  <br /></p>
        </div>
        </div>
        <Footer />
        </div>
    </>
  )
}
export default Nine