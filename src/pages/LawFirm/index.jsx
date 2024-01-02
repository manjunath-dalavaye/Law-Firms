import React from "react";

import { Button, Img, Line, List, Text } from "components";

const LawFirmPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-black-900 sm:h-[700px] md:h-[726px] h-[909px] p-[53px] md:px-5 relative w-full">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[6%] w-[79%]">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[30px]"
                  src="images/img_group10386.svg"
                  alt="group10386"
                />
                <div className="flex md:flex-1 sm:flex-col flex-row gap-[41px] items-start justify-center md:ml-[0] ml-[212px] w-[38%] md:w-full">
                  <Text
                    className="text-base text-center text-white-A700"
                    size="txtInterSemiBold16"
                  >
                    Home
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700"
                    size="txtInterSemiBold16"
                  >
                    Attorneys
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700"
                    size="txtInterSemiBold16"
                  >
                    Practice Areas
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700"
                    size="txtInterSemiBold16"
                  >
                    About Us
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[172px] md:ml-[0] ml-[177px] text-base text-center"
                  shape="square"
                  color="white_A700"
                  variant="outline"
                >
                  Contact Now
                </Button>
              </div>
              <Text
                className="leading-[147.52%] md:ml-[0] ml-[3px] mt-[150px] md:text-5xl text-[66px] text-white-A700"
                size="txtInterRegular66"
              >
                <span className="text-white-A700 font-inter text-left font-medium">
                  <>
                    You don’t have to <br />
                  </>
                </span>
                <span className="text-white-A700 font-inter text-left font-bold">
                  Fight them Alone.
                </span>
              </Text>
              <Text
                className="leading-[162.52%] md:ml-[0] ml-[5px] mt-[35px] text-lg text-white-A700_75 w-1/2 sm:w-full"
                size="txtInterMedium18"
              >
                Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
                curabitur sodales conubia ut inceptos faucibus himenaeos tortor
                eget, hac massa gravida arcu interdum proin curae.
              </Text>
              <div className="bg-white-A700_63 flex sm:flex-col flex-row gap-[43px] items-center justify-end mt-9 p-1.5 rounded-[37px] w-[39%] md:w-full">
                <div className="flex flex-row gap-3 items-start justify-start w-[53%] sm:w-full">
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_hiconboldmessage.svg"
                    alt="hiconboldmessag"
                  />
                  <Text
                    className="mt-0.5 text-base text-center text-white-A700"
                    size="txtInterMedium16"
                  >
                    Enter your eamil address
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[137px] rounded-[31px] text-base text-center"
                  size="md"
                >
                  Let’s Talk
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute md:h-[509px] h-[544px] inset-y-[0] my-auto right-[11%] w-[33%] sm:w-full">
            <div
              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[467px] sm:h-auto inset-x-[0] items-center justify-start mx-auto w-[467px]"
              style={{ backgroundImage: "url('images/img_group7.svg')" }}
            >
              <Img
                className="h-[467px] md:h-auto object-cover w-[467px] sm:w-full"
                src="images/img_maskgroup.png"
                alt="maskgroup"
              />
            </div>
            <Img
              className="absolute h-[509px] inset-x-[0] mx-auto object-cover top-[0] w-[95%]"
              src="images/img_image.png"
              alt="image_Three"
            />
          </div>
        </div>
        <div className="h-[206px] sm:h-[362px] md:h-[515px] max-w-[1132px] mt-[156px] mx-auto md:px-5 relative w-full">
          <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-center justify-between m-auto w-full">
            <Text
              className="leading-[161.52%] sm:text-[40px] md:text-[46px] text-[54px] text-white-A700"
              size="txtInterSemiBold54"
            >
              <>
                Let’s Introduce
                <br />
                Ourself
              </>
            </Text>
            <div className="flex flex-col gap-[19px] items-start justify-start">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                size="txtInterSemiBold32"
              >
                Criminal Lawyer
              </Text>
              <Text
                className="leading-[162.52%] text-lg text-white-A700_75"
                size="txtInterMedium18"
              >
                <>
                  Amet minim mollit non deserunt ullamco est
                  <br />
                  sit aliqua dolor do amet sint. Velit officia consequatduis
                  <br />
                  enim velit mollit Exercitation.
                </>
              </Text>
            </div>
          </div>
          <Line className="absolute bg-gray-700 h-[206px] inset-[0] justify-center m-auto w-px" />
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1139px] mt-[180px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[97px] items-center justify-start w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[54px] text-white-A700"
              size="txtInterSemiBold54"
            >
              Why Choose us?
            </Text>
            <List
              className="sm:flex-col flex-row gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-900 flex flex-1 flex-col items-start justify-center outline outline-[1px] outline-white-A700_19 p-[23px] sm:px-5 rounded-[14px] w-full">
                <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col h-[101px] items-center justify-start mt-[5px] p-[19px] rounded-[50px] w-[101px]">
                  <Img
                    className="h-[62px] w-[62px]"
                    src="images/img_hiconboldgift.svg"
                    alt="hiconboldgift"
                  />
                </div>
                <Text
                  className="mt-[25px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterSemiBold24"
                >
                  98% Success Rate
                </Text>
                <Text
                  className="leading-[162.52%] mt-[22px] text-sm text-white-A700_75"
                  size="txtInterMedium14"
                >
                  <>
                    Amet minim mollit non deserunt ullamco est
                    <br />
                    sit aliqua dolor do amet sint. Velit officia
                    <br />
                    consequatduis enim velit mollit Exer.
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-semibold mb-[13px] min-w-[121px] mt-[22px] text-center text-sm"
                  shape="round"
                >
                  Read More
                </Button>
              </div>
              <div className="bg-blue_gray-900 flex flex-1 flex-col items-start justify-center outline outline-[1px] outline-white-A700_19 p-[23px] sm:px-5 rounded-[14px] w-full">
                <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col h-[101px] items-center justify-start mt-[5px] p-[19px] rounded-[50px] w-[101px]">
                  <Img
                    className="h-[62px] w-[62px]"
                    src="images/img_hiconboldgift.svg"
                    alt="hiconboldgift"
                  />
                </div>
                <Text
                  className="mt-[25px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterSemiBold24"
                >
                  100% Success Rate
                </Text>
                <Text
                  className="leading-[162.52%] mt-[22px] text-sm text-white-A700_75"
                  size="txtInterMedium14"
                >
                  <>
                    Amet minim mollit non deserunt ullamco est
                    <br />
                    sit aliqua dolor do amet sint. Velit officia
                    <br />
                    consequatduis enim velit mollit Exer.
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-semibold mb-[13px] min-w-[121px] mt-[22px] text-center text-sm"
                  shape="round"
                >
                  Read More
                </Button>
              </div>
              <div className="bg-gray-900 flex flex-1 flex-col items-start justify-center outline outline-[1px] outline-white-A700_19 p-[23px] sm:px-5 rounded-[14px] w-full">
                <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col h-[101px] items-center justify-start mt-[5px] p-[19px] rounded-[50px] w-[101px]">
                  <Img
                    className="h-[62px] w-[62px]"
                    src="images/img_hiconboldgift.svg"
                    alt="hiconboldgift"
                  />
                </div>
                <Text
                  className="mt-[25px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterSemiBold24"
                >
                  100% Success Rate
                </Text>
                <Text
                  className="leading-[162.52%] mt-[22px] text-sm text-white-A700_75"
                  size="txtInterMedium14"
                >
                  <>
                    Amet minim mollit non deserunt ullamco est
                    <br />
                    sit aliqua dolor do amet sint. Velit officia
                    <br />
                    consequatduis enim velit mollit Exer.
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-semibold mb-[13px] min-w-[121px] mt-[22px] text-center text-sm"
                  shape="round"
                >
                  Read More
                </Button>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1140px] mt-[183px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[71px] items-center justify-start w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[54px] text-white-A700"
              size="txtInterSemiBold54"
            >
              Area of Practices
            </Text>
            <List
              className="flex flex-col gap-[30px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                <div className="h-[342px] relative w-[66%] md:w-full">
                  <Img
                    className="h-[342px] m-auto object-cover rounded-[14px] w-full"
                    src="images/img_rectangle3652.png"
                    alt="rectangle3652"
                  />
                  <Text
                    className="absolute bottom-[11%] inset-x-[0] mx-auto text-2xl md:text-[22px] text-gray-50 sm:text-xl w-max"
                    size="txtInterSemiBold24Gray50"
                  >
                    BUSINESS LAW
                  </Text>
                </div>
                <div className="h-[342px] relative w-[32%] md:w-full">
                  <Img
                    className="h-[342px] m-auto object-cover rounded-[14px] w-full"
                    src="images/img_rectangle3651.png"
                    alt="rectangle3651"
                  />
                  <Text
                    className="absolute bottom-[8%] inset-x-[0] mx-auto text-2xl md:text-[22px] text-gray-50 sm:text-xl w-max"
                    size="txtInterSemiBold24Gray50"
                  >
                    Partnership LAW
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                <div className="h-[342px] relative w-[32%] md:w-full">
                  <Img
                    className="h-[342px] m-auto object-cover rounded-[14px] w-full"
                    src="images/img_rectangle3653.png"
                    alt="rectangle3653"
                  />
                  <Text
                    className="absolute bottom-[8%] inset-x-[0] mx-auto text-2xl md:text-[22px] text-gray-50 sm:text-xl w-max"
                    size="txtInterSemiBold24Gray50"
                  >
                    REAL ESTATE LAW
                  </Text>
                </div>
                <div className="h-[342px] relative w-[66%] md:w-full">
                  <Img
                    className="h-[342px] m-auto object-cover rounded-[14px] w-full"
                    src="images/img_rectangle3654.png"
                    alt="rectangle3654"
                  />
                  <Text
                    className="absolute bottom-[7%] inset-x-[0] mx-auto text-2xl md:text-[22px] text-gray-50 sm:text-xl w-max"
                    size="txtInterSemiBold24Gray50"
                  >
                    BUSINESS LAW
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                <div className="h-[342px] relative w-[66%] md:w-full">
                  <Img
                    className="h-[342px] m-auto object-cover rounded-[14px] w-full"
                    src="images/img_rectangle3656.png"
                    alt="rectangle3656"
                  />
                  <Text
                    className="absolute bottom-[10%] inset-x-[0] mx-auto text-2xl md:text-[22px] text-gray-50 sm:text-xl w-max"
                    size="txtInterSemiBold24Gray50"
                  >
                    LANDLORD DISPUTES
                  </Text>
                </div>
                <div className="h-[342px] relative w-[32%] md:w-full">
                  <Img
                    className="h-[342px] m-auto object-cover rounded-[14px] w-full"
                    src="images/img_rectangle3655.png"
                    alt="rectangle3655"
                  />
                  <Text
                    className="absolute bottom-[11%] inset-x-[0] mx-auto text-2xl md:text-[22px] text-gray-50 sm:text-xl w-max"
                    size="txtInterSemiBold24Gray50"
                  >
                    ELDER ABUSE
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1137px] mt-[186px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
              <Text
                className="leading-[143.02%] sm:text-[40px] md:text-[46px] text-[54px] text-white-A700"
                size="txtInterSemiBold54"
              >
                <>
                  What says our
                  <br />
                  happy Clients
                </>
              </Text>
              <div className="flex sm:flex-1 flex-row gap-[19px] items-center justify-between sm:mt-0 mt-[62px] w-[18%] sm:w-full">
                <div className="bg-gray-300 flex flex-col h-[90px] items-center justify-end p-[26px] sm:px-5 rounded-[50%] w-[90px]">
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
                <div className="bg-orange-300 flex flex-col h-[90px] items-center justify-start p-6 sm:px-5 rotate-[-180deg] rounded-[50%] w-[90px]">
                  <Img
                    className="h-[38px] w-[38px]"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-900 flex flex-1 flex-col items-start justify-center outline outline-[1px] outline-white-A700_19 p-6 sm:px-5 rounded-[14px] w-full">
                <Img
                  className="h-[102px] md:h-auto ml-0.5 md:ml-[0] mt-3 rounded-[50%] w-[34%]"
                  src="images/img_ellipse14.png"
                  alt="ellipseFourteen"
                />
                <Text
                  className="mt-[19px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterSemiBold24"
                >
                  Jane Cooper
                </Text>
                <Text
                  className="ml-0.5 md:ml-[0] mt-[7px] text-sm text-white-A700"
                  size="txtInterRegular14"
                >
                  Ceo of Hunt
                </Text>
                <Text
                  className="leading-[162.52%] mb-3.5 ml-0.5 md:ml-[0] mt-[25px] text-sm text-white-A700_75"
                  size="txtInterMedium14"
                >
                  <>
                    Amet minim mollit non deserunt ullamco est
                    <br />
                    sit aliqua dolor do amet sint. Velit officia
                    <br />
                    consequatduis enim velit mollit Exer. sit
                    <br />
                    aliqua dolor do amet sint. Velit officia
                  </>
                </Text>
              </div>
              <div className="bg-blue_gray-900 flex flex-1 flex-col items-start justify-center outline outline-[1px] outline-white-A700_19 p-6 sm:px-5 rounded-[14px] w-full">
                <Img
                  className="h-[102px] md:h-auto ml-0.5 md:ml-[0] mt-3 rounded-[50%] w-[34%]"
                  src="images/img_ellipse14_102x105.png"
                  alt="ellipseFourteen"
                />
                <Text
                  className="mt-[17px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterSemiBold24"
                >
                  Devon Lane
                </Text>
                <Text
                  className="ml-0.5 md:ml-[0] mt-[9px] text-sm text-white-A700"
                  size="txtInterRegular14"
                >
                  Ceo of Hunt
                </Text>
                <Text
                  className="leading-[162.52%] mb-3.5 ml-0.5 md:ml-[0] mt-[25px] text-sm text-white-A700_75"
                  size="txtInterMedium14"
                >
                  <>
                    Amet minim mollit non deserunt ullamco est
                    <br />
                    sit aliqua dolor do amet sint. Velit officia
                    <br />
                    consequatduis enim velit mollit Exer. sit
                    <br />
                    aliqua dolor do amet sint. Velit officia
                  </>
                </Text>
              </div>
              <div className="bg-gray-900 flex flex-1 flex-col items-start justify-center outline outline-[1px] outline-white-A700_19 p-6 sm:px-5 rounded-[14px] w-full">
                <Img
                  className="h-[102px] md:h-auto ml-0.5 md:ml-[0] mt-3 rounded-[50%] w-[34%]"
                  src="images/img_ellipse14_1.png"
                  alt="ellipseFourteen"
                />
                <Text
                  className="mt-[17px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterSemiBold24"
                >
                  Robert Fox
                </Text>
                <Text
                  className="ml-0.5 md:ml-[0] mt-[9px] text-sm text-white-A700"
                  size="txtInterRegular14"
                >
                  Ceo of Hunt
                </Text>
                <Text
                  className="leading-[162.52%] mb-3.5 ml-0.5 md:ml-[0] mt-[25px] text-sm text-white-A700_75"
                  size="txtInterMedium14"
                >
                  <>
                    Amet minim mollit non deserunt ullamco est
                    <br />
                    sit aliqua dolor do amet sint. Velit officia
                    <br />
                    consequatduis enim velit mollit Exer. sit
                    <br />
                    aliqua dolor do amet sint. Velit officia
                  </>
                </Text>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1156px] mt-[191px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[114px] items-center justify-start w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[54px] text-white-A700"
              size="txtInterSemiBold54"
            >
              Our Team
            </Text>
            <List
              className="flex flex-col gap-[55px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-[65%] md:w-full">
                  <div className="flex flex-row gap-[22px] items-start justify-between w-[29%] sm:w-full">
                    <Img
                      className="h-[68px] md:h-auto rounded-[50%] w-[68px]"
                      src="images/img_ellipse15.png"
                      alt="ellipseFifteen"
                    />
                    <div className="flex flex-col gap-1.5 items-start justify-start mt-[3px]">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtInterSemiBold24"
                      >
                        Danial Def
                      </Text>
                      <Text
                        className="text-sm text-white-A700_75"
                        size="txtInterRegular14WhiteA70075"
                      >
                        301 Cases
                      </Text>
                    </div>
                  </div>
                  <div className="bg-orange-300 flex flex-col items-start justify-start p-[18px] rounded-[14px] w-[47%] sm:w-full">
                    <div className="flex flex-row gap-[22px] items-start justify-start mb-[5px] ml-2 md:ml-[0] w-[58%] md:w-full">
                      <Img
                        className="h-[68px] md:h-auto rounded-[50%] w-[68px]"
                        src="images/img_ellipse16.png"
                        alt="ellipseSixteen"
                      />
                      <div className="flex flex-col gap-1.5 items-start justify-start mt-1">
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                          size="txtInterSemiBold24Bluegray90001"
                        >
                          Sanfole
                        </Text>
                        <Text
                          className="text-black-900_7e text-sm"
                          size="txtInterRegular14Black9007e"
                        >
                          850 Cases
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row gap-[22px] items-start justify-between md:mt-0 mt-[11px] w-[17%] md:w-full">
                  <Img
                    className="h-[68px] md:h-auto rounded-[50%] w-[68px]"
                    src="images/img_ellipse15_68x68.png"
                    alt="ellipseFifteen_One"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start mt-[3px]">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtInterSemiBold24"
                    >
                      Cesforila
                    </Text>
                    <Text
                      className="text-sm text-white-A700_75"
                      size="txtInterRegular14WhiteA70075"
                    >
                      470 Cases
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-end justify-between w-[99%] md:w-full">
                <div className="flex flex-row gap-[22px] items-start justify-between md:mt-0 mt-[7px] w-[16%] md:w-full">
                  <Img
                    className="h-[68px] md:h-auto rounded-[50%] w-[68px]"
                    src="images/img_ellipse15_1.png"
                    alt="ellipseFifteen"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start mt-1">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtInterSemiBold24"
                    >
                      Colleen
                    </Text>
                    <Text
                      className="text-sm text-white-A700_75"
                      size="txtInterRegular14WhiteA70075"
                    >
                      180 Cases
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row sm:gap-10 items-start justify-between w-[63%] md:w-full">
                  <div className="flex flex-row gap-[22px] items-start justify-between mt-[7px] w-[27%]">
                    <Img
                      className="h-[68px] md:h-auto rounded-[50%] w-[68px]"
                      src="images/img_ellipse15_2.png"
                      alt="ellipseFifteen_One"
                    />
                    <div className="flex flex-col gap-1.5 items-start justify-start mt-1">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtInterSemiBold24"
                      >
                        Haldone
                      </Text>
                      <Text
                        className="text-sm text-white-A700_75"
                        size="txtInterRegular14WhiteA70075"
                      >
                        212 Cases
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[22px] items-start justify-between mb-[7px] w-1/4">
                    <Img
                      className="h-[68px] md:h-auto rounded-[50%] w-[68px]"
                      src="images/img_ellipse15_3.png"
                      alt="ellipseFifteen_Two"
                    />
                    <div className="flex flex-col gap-1.5 items-start justify-start mt-[3px]">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtInterSemiBold24"
                      >
                        Nik Jeo
                      </Text>
                      <Text
                        className="text-sm text-white-A700_75"
                        size="txtInterRegular14WhiteA70075"
                      >
                        350 Cases
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1140px] mt-[202px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[54px] text-white-A700"
              size="txtInterSemiBold54"
            >
              FAQ
            </Text>
            <div className="flex md:flex-col flex-row gap-[19px] items-start justify-between w-full">
              <Text
                className="leading-[162.52%] text-lg text-white-A700_75"
                size="txtInterMedium18"
              >
                <>
                  Amet minim mollit non deserunt ullamco est sit
                  <br />
                  aliqua dolor do amet sint.{" "}
                </>
              </Text>
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-col gap-[38px] justify-start w-full">
                  <div className="flex flex-col gap-[33px] items-start justify-start md:ml-[0] ml-[7px]">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtInterSemiBold24"
                    >
                      Do I need a personal injury report?
                    </Text>
                    <Text
                      className="leading-[162.52%] text-lg text-white-A700_75"
                      size="txtInterMedium18"
                    >
                      <>
                        Amet minim mollit non deserunt ullamco est sit
                        <br />
                        aliqua dolor do amet sint. Velit officia consequatduis
                        <br />
                        enim velit mollit Exer. Amet minim mollit non deserunt
                        <br />
                        ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequatduis enim velit mollit Exer.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
                    <Line className="bg-white-A700_5e h-0.5 w-full" />
                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-[35px] w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtInterSemiBold24"
                      >
                        How much is my case worth?
                      </Text>
                      <Text
                        className="bg-orange-300 flex h-7 items-center justify-center mb-[3px] rounded-[50%] text-black-900_01 text-center text-lg w-7"
                        size="txtInterSemiBold18"
                      >
                        +
                      </Text>
                    </div>
                    <Line className="bg-white-A700_5e h-0.5 mt-[38px] w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-[45px] items-start justify-between mt-[42px] w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtInterSemiBold24"
                      >
                        What should I do right after car accidect
                      </Text>
                      <Text
                        className="bg-orange-300 flex h-7 items-center justify-center mb-[3px] rounded-[50%] text-black-900_01 text-center text-lg w-7"
                        size="txtInterSemiBold18"
                      >
                        +
                      </Text>
                    </div>
                    <Line className="bg-white-A700_5e h-0.5 mt-[38px] w-full" />
                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-[42px] w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtInterSemiBold24"
                      >
                        How much is my case worth?
                      </Text>
                      <Text
                        className="bg-orange-300 flex h-7 items-center justify-center mb-[3px] rounded-[50%] text-black-900_01 text-center text-lg w-7"
                        size="txtInterSemiBold18"
                      >
                        +
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800_7f flex flex-col font-helveticanowdisplay items-center justify-start max-w-[1245px] mt-[211px] mx-auto p-[90px] md:px-5 w-full">
          <div className="flex flex-col gap-[38px] items-center justify-start mb-0.5 w-[65%] md:w-full">
            <Text
              className="sm:text-[41px] md:text-[47px] text-[55px] text-center text-white-A700"
              size="txtHelveticaNowDisplayMedium55"
            >
              Subscribe Our Newsletter
            </Text>
            <div className="flex md:flex-col flex-row gap-[9px] items-center justify-between w-full">
              <Text
                className="bg-gray-300_01 h-[53px] justify-center pb-[17px] pl-[22px] pr-[35px] pt-3.5 sm:px-5 rounded-bl-lg rounded-tl-lg text-gray-600 text-sm w-[276px]"
                size="txtHelveticaNowDisplayRegIta14"
              >
                Name :{" "}
              </Text>
              <Text
                className="bg-gray-300_01 h-[53px] justify-center px-[13px] py-[15px] text-gray-600 text-sm w-[276px]"
                size="txtHelveticaNowDisplayRegIta14"
              >
                Enter your Email
              </Text>
              <Button
                className="cursor-pointer font-bold min-w-[116px] rounded-br-lg rounded-tr-lg text-center text-sm"
                size="sm"
              >
                SEND
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-gray-900_02 flex md:flex-col flex-row font-inter md:gap-10 gap-[136px] items-start justify-start mt-[242px] p-24 md:px-10 sm:px-5 w-full">
          <Img
            className="h-[30px] md:ml-[0] ml-[67px] md:mt-0 mt-[21px]"
            src="images/img_group10386.svg"
            alt="group10386_One"
          />
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[100px] justify-start md:mt-0 mt-[21px] w-[69%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-row sm:gap-10 items-start justify-between w-[65%] md:w-full">
                <Text
                  className="text-base text-white-A700 tracking-[0.10px]"
                  size="txtInterRegular16"
                >
                  Home{" "}
                </Text>
                <Text
                  className="text-base text-white-A700"
                  size="txtInterSemiBold16"
                >
                  Attorneys
                </Text>
                <Text
                  className="text-base text-white-A700 tracking-[0.10px]"
                  size="txtInterRegular16"
                >
                  Practice Areas{" "}
                </Text>
                <Text
                  className="text-base text-white-A700"
                  size="txtInterSemiBold16"
                >
                  About Us
                </Text>
              </div>
              <Img
                className="h-[30px]"
                src="images/img_group90.svg"
                alt="groupNinety"
              />
            </div>
            <div className="flex sm:flex-col flex-row font-helveticanowdisplay sm:gap-5 items-start justify-start md:ml-[0] ml-[63px] w-1/2 md:w-full">
              <Text
                className="text-sm text-white-A700"
                size="txtHelveticaNowDisplayRegular14"
              >
                © 2020 Acme. All right reserved.
              </Text>
              <a
                href="javascript:"
                className="sm:ml-[0] ml-[25px] text-sm text-white-A700"
              >
                <Text size="txtHelveticaNowDisplayRegular14">
                  Privacy Policy
                </Text>
              </a>
              <a
                href="javascript:"
                className="sm:ml-[0] ml-[21px] text-sm text-white-A700"
              >
                <Text size="txtHelveticaNowDisplayRegular14">
                  Terms of Service
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LawFirmPage;
