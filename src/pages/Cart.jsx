import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import Breadcrumb from "../components/Breadcrumb";
import { ImCross } from "react-icons/im";
import Image from "../components/Image";
import Subheading from "../components/Subheading";
import Paragraph from "../components/Paragraph";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  decrementProd,
  incrementProd,
  removeProduct,
} from "../slices/singleSlice";
import CustomSelector from "../components/CustomSelector";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Cart() {
  // for dynamic bredcrumb
  let data = useSelector((state) => state.breadcrumb.currentname);
  let breadC = window.location.pathname.replace("/", "").replace("-", " ");

  // for getting info of cart product
  let info = useSelector((state) => state.singleproduct.cartitem);
  // console.log(info);
  let dispatch = useDispatch();
  // for sum total price
  const { totalprice, totalquantity } = info.reduce(
    (acc, item) => {
      acc.totalprice += item.price * item.qun;
      acc.totalquantity += item.qun;
      return acc;
    },
    { totalprice: 0, totalquantity: 0 }
  );
  return (
    <section className="pt-[124px] pb-[131px]">
      <Container>
        <Flex>
          <h1>{data}</h1>
          <div className="px-2">&gt;</div>
          <h1 className="first-letter:uppercase">{breadC}</h1>
        </Flex>
        <Heading text="Cart" className="text-5xl font-bold text-primary " />
        <Breadcrumb />

        {/* cartlist start here */}
        <div className="cartlist">
          <div className="grid grid-cols-4 px-4 py-8 bg-[#F5F5F3]">
            <h4 className="font-dmsans font-bold text-base text-primary">
              Product
            </h4>
            <h4 className="font-dmsans font-bold text-base text-primary">
              Price
            </h4>
            <h4 className="font-dmsans font-bold text-base text-primary">
              Quantity
            </h4>
            <h4 className="font-dmsans font-bold text-base text-primary">
              SubTotal
            </h4>
          </div>
          {/* for dynamic adding cart data */}

          {info.map((item, i) => (
            <div
              className="grid grid-cols-4 px-4 py-7 border items-center"
              key={i}
            >
              <div className="flex items-center">
                <button onClick={() => dispatch(removeProduct(i))}>
                  <ImCross className="text-sm" />
                </button>
                <Image
                  src={item.thumbnail}
                  className={`h-[100px] w-[100px] mx-5`}
                />
                <Subheading text={`${item.title}`} className={`text-base`} />
              </div>
              <Subheading text={`$${item.price}`} />
              <div className="quantity">
                <div className="flex justify-between items-center px-2 border w-[139px] h-9">
                  <button onClick={() => dispatch(decrementProd(i))}>
                    <FaMinus className="text-sm" />
                  </button>
                  <Paragraph text={item.qun} />
                  <button onClick={() => dispatch(incrementProd(i))}>
                    <FaPlus className="text-sm" />
                  </button>
                </div>
              </div>
              <Subheading text={`$${item.price * item.qun}`} />
            </div>
          ))}
        </div>
        {/* cartlist end here */}
        <Flex className={`px-4 py-6 items-center border justify-between`}>
          <div className="flex items-center gap-x-5">
            <CustomSelector defaultvalue={`SIZE`} className={`w-[255px]`} />
            <Subheading
              text={`Apply Coupon`}
              className={`text-sm cursor-pointer`}
            />
          </div>
          <div>
            <Subheading
              text={`Update Cart`}
              className={`text-sm cursor-pointer`}
            />
          </div>
        </Flex>
        <Subheading text={`Cart Totals`} className={`text-end mt-16 mb-10`} />
        <table className="ms-auto w-[300px] border ">
          <tr className="">
            <td className="border p-4 ">
              <Subheading text={`Total Quantity`} className={`text-base`} />
            </td>
            <td className="border p-4 ">
              <Paragraph text={totalquantity} />
            </td>
          </tr>
          <tr className="">
            <td className="border p-4 ">
              <Subheading text={`Total`} className={`text-base`} />
            </td>
            <td className="border p-4 ">
              <Paragraph text={`$${totalprice}`} />
            </td>
          </tr>
        </table>
        <Link to="/checkout">
          <Button
            text={`Proceed to Checkout`}
            className={`py-4 px-5 ml-auto block mt-10`}
          />
        </Link>
      </Container>
    </section>
  );
}

export default Cart;
