import React from "react";
import { Link } from "react-router-dom";
import DonateButton from "../../components/donate";
const Donate = () => {
  return (
    <div className="w-full h-full flex flex-col px-14 bg-white  py-5">
      {/* navbar is here  👋 */}
      <div
        className="flex items-center px-7 justify-between  shadow-sm h-15
       rounded-2xl bg-[#FAFAFA] backdrop-blur-[1px]"
      >
        <Link to={"/"}>
          <img src="/images/logo.svg" alt="" />
        </Link>
        <div className="flex items-center justify-end gap-x-4">
          <span className=" font-semibold  text-gray-800 ">Contact Us</span>
          <div className="w-10 h-10 rounded-full bg-[#E3E3E3]  flex items-center justify-center">
            <img src="/icons/user.svg" alt="" />
          </div>
        </div>
      </div>
      {/* banner image   */}
      <div className="h-[580px] bg-black w-full  mt-6 rounded-2xl overflow-hidden">
        <img
          src="/images/home2.png"
          alt=""
          className="w-full h-full object-cover opacity-85  object-center"
        />
      </div>
      {/* content section  */}
      <div className="flex flex-col gap-y-2 mt-5">
        <h2 className="text-3xl font-semibold">
          The Day the Sky Fell: Unraveling the Catastrophe of 2025
        </h2>
        <p>
          When nature’s fury collided with human fragility, the world was left
          to pick up the pieces—here’s what happened, why it matters, and what
          comes next.
        </p>
        <div className="flex items-center  justify-start text-[#33333399]/80">
          <img src="/icons/calender.svg" alt="" />
          <span className="ml-3">Published on :</span>
          <span className="ml-1">26/03/2024</span>
        </div>

        <div className="flex flex-col gap-y-4 mt-4 ">
          <h3 className="text-xl font-semibold">About </h3>
          <div className="flex flex-col gap-y-8 ">
            <p>
              On February 20, 2025, the world watched in stunned silence as the
              sky unleashed a fury few could have imagined—a monstrous supercell
              storm, swollen by decades of climate neglect, tore through North
              America’s heartland with winds topping 300 miles per hour and hail
              the size of grapefruits. Cities crumbled under the onslaught, from
              Kansas City to Minneapolis, leaving behind a trail of shattered
              homes, uprooted lives, and a death toll that climbed into the
              thousands within hours. Scientists had warned of such an event for
              years, pointing to rising global temperatures and destabilized
              weather patterns, but the scale of this catastrophe—later dubbed
              "The Day the Sky Fell"— caught even the most prepared off guard.
              It wasn’t just a storm; it was a brutal reminder of nature’s power
              when pushed to the brink by human fragility.
            </p>
            <p>
              The aftermath painted a grim picture of survival amid the
              wreckage, where funding—or the lack of it—became as critical as
              the disaster itself. Rescue operations scrambled to deploy, but
              depleted federal budgets and overstretched emergency services
              slowed the response, leaving survivors to fend for themselves in
              freezing rain and rubble. Estimates pegged the damages at half a
              trillion dollars, a staggering figure that dwarfed the annual
              budgets of most nations, yet initial relief funds trickled in at a
              mere $10 billion—barely enough to clear debris, let alone rebuild
              lives. Charities and crowdfunding campaigns sprang up overnight,
              but they couldn’t bridge the gap left by years of slashed disaster
              preparedness programs, exposing a stark truth: when the sky fell,
              the safety net had already been frayed beyond repair.
            </p>
            <p>
              Rebuilding from the catastrophe of 2025 has since sparked a global
              debate about funding the future in a world prone to breaking.
              Governments, facing public outrage, pledged sweeping reforms—$200
              billion was earmarked for climate-resilient infrastructure, though
              critics argue it’s a drop in the bucket against the rising tide of
              disasters. Private sectors stepped in with promises of innovation,
              from storm-proof housing to advanced warning systems, but their
              investments hinged on tax breaks and profit margins, not altruism.
              For the millions displaced and the communities still clawing back
              from the edge, the question lingers: will the lessons of that
              fateful day translate into action, or will the next catastrophe
              find us just as vulnerable, counting coins while the sky falls
              again?
            </p>
          </div>
        </div>
      </div>
      {/* galler section  */}
      <div className="flex flex-col mt-6 ">
        <h3 className="text-xl font-semibold">Gallery </h3>
        <div className="grid grid-cols-3 gap-4 h-[470px] overflow-hidden">
          <div className="grid grid-rows-2 gap-4">
            <div className="w-full h-full overflow-hidden">
              <img
                src="/images/1.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full overflow-hidden">
              <img
                src="/images/2.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="-300">
            <img
              src="/images/3.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="w-full h-full overflow-hidden">
              <img
                src="/images/4.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full overflow-hidden">
              <img
                src="/images/5.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* footer section  */}
      <div className="flex flex-col mt-14">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h5 className="text-sm font-semibold   uppercase   ">
              Share This Post
            </h5>
            <div className="flex items-center gap-x-4 mt-4 justify-start">
              <Link>
                <img src="/icons/instagram.svg" alt="" />
              </Link>
              <Link>
                <img src="/icons/facebook.svg" alt="" />
              </Link>
              <Link>
                <img src="/icons/whatsapp.svg" alt="" />
              </Link>
              <Link>
                <img src="/icons/copy.svg" alt="" />
              </Link>
            </div>
          </div>

          <DonateButton />
        </div>
        <div className="flex items-center mt-16 justify-between">
          <div className="flex flex-col  gap-y-2">
            <img src="/images/logo.svg" alt="" className="w-[110px]" />
            <span>Kozhikkode, Kerala</span>
            <span>+91 7699092370</span>
          </div>
          <div className="flex flex-col gap-y-2 items-center">
            <span>Find Us On Social Media:</span>
            <div className="flex items-center justify-center gap-x-4">
              <Link>
                <img src="/icons/roundedFacebook.svg" />
              </Link>
              <Link>
                <img src="/icons/roundedTwitter.svg" />
              </Link>
              <Link>
                <img src="/icons/roundedInstagram.svg" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-end gap-y-1">
            <span>We’re Always Happy To Help</span>
            <span>hopeslive@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center justify-center border-t border-[#E4D8D8] mt-10 pt-6 pb-2">
          <span>Copyright © 2025 Hopes Live</span>
        </div>
      </div>
    </div>
  );
};

export default Donate;
