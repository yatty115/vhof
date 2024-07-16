import React from "react";

const Footer = () => {
  return (
    <div className="bg-white border-t-[5px] border-[#CE6E19] relative z-20">
      <div className="flex max-md:flex-wrap md:justify-around items-center gap-1 mx-auto max-w-[1328px] p-6">
        <div class="[&>*]:!text-[#424242] [&>*]:!text-xs [&>*]:!mb-[7px]">
          <div>Routing Number: 275976655</div>
          <div>Contact us at: 800-398-2667</div>
          <div> CoVantage Credit Union. All Rights Reserved.</div>
        </div>
        <div class="[&>*]:!text-[#424242] [&>*]:!text-xs">
          <div>Equal Housing Lender</div>
          <div className="flex items-center gap-1">
            Federally Insured By NCUA
            <img
              className="w-[100px] h-[50px]"
              src="/content.aspx?theme=Theme5&amp;color1=%23424242&amp;color2=%23F5F5F5&amp;image=FederallyInsured.svg"
              alt="NCUA"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
