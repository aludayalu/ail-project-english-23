import Head from "next/head";
import { Text, Link, Navbar, Spacer, Divider, Button, Row, Card, Image } from "@nextui-org/react";

function Section(text, image, flip_mode) {
    var text_section=<div style={{width:"50%", height:"100%"}} className="wrapper show">
                        <div>
                            {text}
                        </div>
                    </div>
    var image_section=<div style={{width:"50%", height:"100%"}} className="wrapper show">
                        <img css={{zIndex:999}} src={image} style={{borderRadius:"100px", border:"2px solid #333", width: "45vw", marginLeft:"-2vw", maxHeight:"60%"}}></img>
                    </div>
    return (
        <>
        <Row css={{height:"100vh"}}>
                {flip_mode ? image_section : text_section}
                {!flip_mode ? image_section : text_section}
        </Row>
        </>
    )
}

export default function Home() {
    return (
        <>
            <Head>
                <title></title>
            </Head>
            {Section(
                (<>
                <Text h1 size={"80px"}>Discovering Tut</Text>
                        <Spacer></Spacer>
                        <Text h4>A Study by students of Class 11-K surrounding King  <br></br>Tutankhamun's death and prevalent theories which have<br></br> been presented by archaeologists.</Text>
                </>), "kingtut.jpg"
            )}

            <div style={{width:"100vw", height:"100vh"}} className="wrapper show">
                <Card css={{"p":"$5", width:"60vw", height:"60vh", border:"2px solid #333"}} isPressable isHoverable>
                <Row css={{height:"100vh"}}>
                    <div style={{width:"100%", height:"100%"}} className="wrapper show">
                        <div>
                        <Text h1 size={"150px"} className="vertical">Team Members</Text>
                        <Spacer></Spacer>
                        <Text h2 css={{padding:"1vw", marginLeft:"1vw"}}  className="vertical wrapper">
                            <div>
                                <Row className="vertical">
                                    <Text h2 css={{padding:"1vw", marginLeft:"-1vw"}}  className="vertical wrapper">
                                        Aarav Dayal 
                                        <Spacer x={2}></Spacer>
                                        Aryamaan Goswamy
                                        <Spacer x={2}></Spacer>
                                        Aikagra Gupta
                                    </Text>
                                </Row>
                                <Spacer></Spacer>
                                <Row className="vertical">
                                    <Text h2 css={{padding:"1vw"}}  className="vertical wrapper">
                                    Shreyansh Gupta
                                    <Spacer x={2}></Spacer>
                                    Arnav Gupta
                                    <Spacer x={2}></Spacer>
                                    Vivaan Misra
                                    </Text>
                                </Row>
                            </div>
                        </Text>
                        </div>
                    </div>
                </Row>
                </Card>
            </div>

            {Section(
                (<>
                <Text h1 size={"80px"}>Who was King Tut?</Text>
                        <Spacer></Spacer>
                        <Text h4>
                        King Tutankhamun, commonly known as King Tut, was an<br></br> ancient Egyptian pharaoh who ruled during the 18th dynasty<br></br> (approximately 1332–1323 BCE) of the New Kingdom period.<br></br> He ascended to the throne at a young age, around nine or ten,<br></br> and his reign was relatively short-lived. Tutankhamun is<br></br> particularly renowned for the discovery of his nearly intact<br></br> tomb in the Valley of the Kings by Howard Carter in 1922.
                        </Text>
                </>), "kingtut.jpg"
            )}

        {Section(
            (<>
            <Text h1 size={"80px"}>King Tut's Death</Text>
                    <Spacer></Spacer>
                    <Text h4>
                    King Tutankhamun's death remains shrouded in mystery, and<br></br>the circumstances surrounding his demise have intrigued<br></br>historians and archaeologists. The young pharaoh's passing,<br></br>at the age of approximately 18, has sparked numerous<br></br>inquiries into the potential factors that contributed to<br></br>his untimely end. The lack of conclusive evidence and the<br></br>enigmatic nature of his death have fueled ongoing<br></br>investigations, leaving unanswered questions about the<br></br>events leading to the conclusion of Tutankhamun's reign.<br></br>The quest for clarity in this historical puzzle endures,<br></br>prompting continuous scrutiny into the intricacies of his<br></br>life and the perplexities surrounding his mysterious death.
                    </Text>
            </>), "kingtutafter.avif", true
        )}

                <Text h1 className="wrapper" size={"100px"}>Theories of his Death</Text>

        {Section(
            (<>
            <Text h1 size={"80px"}>Murder?</Text>
                    <Spacer></Spacer>
                    <Text h4>
                    In 1968, archaeologists conducted a thorough X-ray<br></br>examination of Tutankhamun's remains, revealing damage<br></br>to the back of the skull, suggesting potential head<br></br>impact. This prompted an investigation into various<br></br>suspects linked to Tutankhamun's death.<br></br><br></br>Ay, a courtier who succeeded Tutankhamun, raised<br></br>suspicions due to his military involvement, hinting at<br></br>possible motives for foul play. Another scrutinized<br></br>individual is Horemheb, the hereditary prince during<br></br>Tutankhamun's rule, with potential gains from his<br></br>demise making him a focus in the investigation.
                    </Text>
            </>), "murdertut.jpg"
        )}

        {Section(
            (<>
            <Text h1 size={"80px"}>A Chariot Accident</Text>
                    <Spacer></Spacer>
                    <Text h4>
                    <br></br>Upon discovering King Tutankhamun's tomb,<br></br>Egyptologists found six disassembled chariots.<br></br>Examinations suggested chariot accidents might<br></br>have caused Tutankhamun's injuries, drawing parallels<br></br>to car accidents. However, contemporary archaeologists<br></br>no longer endorse this theory.<br></br><br></br>Further investigation into Tutankhamun's family<br></br>revealed his mother's mummy, also injured in a<br></br>chariot accident. Remarkably, Tutankhamun's injuries<br></br>were more severe, prompting a reassessment of the<br></br>initial hypothesis about his cause of death.
                    </Text>
            </>), "tutchariot.jpg", true
        )}

        {Section(
            (<>
            <Text h1 size={"80px"}>Malaria 🦟</Text>
                    <Spacer></Spacer>
                    <Text h4>
                    In a comprehensive 2010 study examining Tut's mummy,<br></br>researchers unearthed compelling evidence pointing to<br></br>the presence of repeated malarial infections throughout<br></br>his life. It is noteworthy that malaria, a prevalent<br></br>ailment in ancient Egypt, affected nearly everyone in<br></br>the population at some point. However, the widespread<br></br>occurrence of this infectious disease raises skepticism<br></br>among Egyptologists, leading to a cautious<br></br>reconsideration of whether malaria was indeed the<br></br>primary cause of Tutankhamun's untimely demise.
                    </Text>
            </>), "tutchariot.jpg",
        )}
        </> 
    )
}

`
        {Section(
            (<>
            <Text h1 size={"80px"}>Who was King Tut?</Text>
                    <Spacer></Spacer>
                    <Text h4>
                        
                    </Text>
            </>), "kingtut.jpg"
        )}
`