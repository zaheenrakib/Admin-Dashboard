import {
  Avatar,
  Badge,
  TableBody,
  TableCell,
  TableRow,
} from "@windmill/react-ui";
import { t } from "i18next";
import { FiZoomIn } from "react-icons/fi";
import { Link } from "react-router-dom";

//internal import
import MainDrawer from "@/components/drawer/MainDrawer";
import ProductDrawer from "@/components/drawer/ProductDrawer";
import CheckBox from "@/components/form/others/CheckBox";
import DeleteModal from "@/components/modal/DeleteModal";
import EditDeleteButton from "@/components/table/EditDeleteButton";
import ShowHideButton from "@/components/table/ShowHideButton";
import Tooltip from "@/components/tooltip/Tooltip";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import useUtilsFunction from "@/hooks/useUtilsFunction";

//internal import

const ProductTable = ({ products, isCheck, setIsCheck }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  const { currency, showingTranslateValue, getNumberTwo } = useUtilsFunction();
  console.log(products)
  const handleClick = (e) => {
    const { id, checked } = e.target;
    // console.log("id", id, checked);

    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  return (
    <>
      {isCheck?.length < 1 && <DeleteModal id={serviceId} title={title} />}

      {isCheck?.length < 2 && (
        <MainDrawer>
          <ProductDrawer currency={currency} id={serviceId} />
        </MainDrawer>
      )}

      <TableBody>
        {products?.map((product, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <CheckBox
                type="checkbox"
                name={product?.productName}
                id={product?.id}
                handleClick={handleClick}
                isChecked={isCheck?.includes(product?.id)}
              />
            </TableCell>

            <TableCell>
              <div className="flex items-center">
                {product?.image[0] ? (
                  <Avatar
                    className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                    src={product?.image[0]}
                    alt="product"
                  />
                ) : (
                  <Avatar
                    src={`https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png`}
                    alt="product"
                  />
                )}
                <div>
                  <h2
                    className={`text-sm font-medium ${
                      product?.title.length > 30 ? "wrap-long-title" : ""
                    }`}
                  >
                    {product?.productName}
                  </h2>
                </div>
              </div>
            </TableCell>

            <TableCell>
              <span className="text-sm">
                {product?.slug}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
                {currency}
                {product?.purchasePrice}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
                {currency}
                {product?.salesPrice}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{product?.stock}</span>
            </TableCell>
            <TableCell>
              {product.stock > 0 ? (
                <Badge type="success">{t("Selling")}</Badge>
              ) : (
                <Badge type="danger">{t("SoldOut")}</Badge>
              )}
            </TableCell>
            <TableCell>
              <Link
                to={`/product/${product._id}`}
                className="flex justify-center text-gray-400 hover:text-emerald-600"
              >
                <Tooltip
                  id="view"
                  Icon={FiZoomIn}
                  title={t("DetailsTbl")}
                  bgColor="#10B981"
                />
              </Link>
            </TableCell>
            <TableCell className="text-center">
              <ShowHideButton id={product._id} status={product.status} />
              {/* {product.status} */}
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={product?.id}
                product={product}
                isCheck={isCheck}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                title={showingTranslateValue(product?.title)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default ProductTable;
