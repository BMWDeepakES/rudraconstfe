import * as React from "react";
import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function ProductAdd() {
  const [products, setProducts] = useState([
    {
      productName: "",
      description: "",
      size: "",
      status: "",
      subProd: [
        {
          subProdName: "",
          subprodDescription: "",
          subProdSize: "",
          subProdStatus: "",
        },
      ],
    },
  ]);

  const addProduct = () => {
    setProducts([
      ...ProductAdd.products,
      {
        productName: "",
        description: "",
        size: "",
        status: "",
        subProd: [
          {
            subProdName: "",
            subprodDescription: "",
            subProdSize: "",
            subProdStatus: "",
          },
        ],
      },
    ]);
  };

  const handleProductChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProducts = [...products];
    updatedProducts[index][name] = value;
    setProducts(updatedProducts);
  };

  const handleSubProdChange = (pIndex, sIndex, event) => {
    const { name, value } = event.target;
    const updatedProducts = [...products];
    updatedProducts[pIndex].subProd[sIndex][name] = value;
    setProducts(updatedProducts);
  };

  const addSubProd = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].subProd.push([
      {
        subProdName: "",
        subprodDescription: "",
        subProdSize: "",
        subProdStatus: "",
      },
    ]);
    setProducts(updatedProducts);
  };

  //   const [description, setDescription] = useState("");
  //   const [size, setSize] = useState("");
  //   const [status, setStatus] = useState("");
  //   const [subProdName, setSubProdName] = useState("");
  //   const [subprodDescription, setSubprodDescription] = useState("");
  //   const [subProdSize, setSubProdSize] = useState("");
  //   const [subProdStatus, setSubProdStatus] = useState("");
  //   const navigate = useNavigate();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:8080/api/product/register",
  //         {
  //             productName,
  //             description,
  //             size,
  //             status,
  //             subProd: [
  //                 {
  //                     subProdName,
  //                     subprodDescription,
  //                     subProdSize,
  //                     subProdStatus
  //                 }
  //             ]
  //         }
  //       );
  //       console.log("Product registered:", response.data);
  //       navigate('/');
  //       // You can add further actions after successful registration (e.g., redirect)

  //     } catch (error) {
  //       console.error("Registration failed:", error.response.data);
  //     }
  //   };

  return (
    <div className="container">
    <div className="row justify-content-center">
          <h2 className="mb-4">Add Product</h2>
              {products.map((product, index) => (
                <div  key={index} >
                    <input className="col-md-12"
                      type="text"
                      placeholder="Product Name"
                      name="productName"
                      value={product.productName}
                      onChange={(e) => handleProductChange(index, e)}
                    />
                  
                    <input className="col-md-8"
                      type="text"
                      placeholder="Description"
                      name="description"
                      value={product.description}
                      onChange={(e) => handleProductChange(index, e)}
                    />
                  
                    <input
                      type="text"
                      placeholder="Size"
                      name="size"
                      value={product.size}
                      onChange={(e) => handleProductChange(index, e)}
                    />
                  
                    <input
                      type="text"
                      placeholder="Status"
                      name="status"
                      value="Active"
                      onChange={(e) => handleProductChange(index, e)}
                    />
                  
                  <button onClick={() => addSubProd(index)}>
                    Add Sub Product
                  </button>
                  {product.subProd.map((subProd, sIndex) => (
                    <div key={sIndex}>
                      
                        <input
                          type="text"
                          placeholder="Sub Product Name"
                          name="subProdName"
                          value={subProd.subProdName}
                          onChange={(e) =>
                            handleSubProdChange(index, sIndex, e)
                          }
                        />
                        <input
                          type="text"
                          placeholder="Size"
                          name="Size"
                          value={subProd.subProdSize}
                          onChange={(e) =>
                            handleSubProdChange(index, sIndex, e)
                          }
                        />
                    </div>
                  ))}
                </div>
              ))}
              <button onClick={addProduct}>Add Product</button>
              <button onClick={() => console.log(products)}>Submit</button>
          </div>
          </div>
  );
}
