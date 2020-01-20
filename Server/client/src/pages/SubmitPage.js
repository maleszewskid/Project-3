import React, { Component } from 'react';
// import Header from '../components/Header/Header';
import { Page, Text, Document, Image, Font, StyleSheet, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Quote from '../components/PDF';
import { Link } from 'react-router-dom';
import DownloadLink from '../components/DownloadLink'


// const x = 'fasd';
// const Quote = () => (
//     <Document>
//       <Page >
//         <Text style>
//           {x}
//         </Text>
//       </Page>
//     </Document>
//   );


class SubmitToDoctor extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: '',
    //         placeholder: ''
    //     }
    // }

    // componentDidMount() {
    //     this.setState({
    //         username: this.props.location.state
    //     });
    //     const { username } = this.props.location.state;
    //     console.log(username);
    // }
render = () =>{
                return (
                <>
                    {/* <Header /> */}
                    <div>
                        This is submit to Doctor Page
                        
                    </div>
{/* <React.Fragment> */}

                    <PDFViewer>
                        <Quote />
                    
                    </PDFViewer>
                    {/* <DownloadLink /> */}
{/* </React.Fragment> */}
                </>
                );
        
                }      
            } 
            
export default SubmitToDoctor;
