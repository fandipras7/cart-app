import React from "react";
import './assets/global.css'
import Header from "./component/Header";
import Card from "./component/Card";
import Button from "./Button";
import trash from "./assets/images/trash.svg"
import love from "./assets/images/heart-fill.svg"
import love_blank from "./assets/images/heart_blank.svg"
import caretDown from './assets/images/caret-down.svg'
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addQty, decreaseQty, addWhislist } from "./redux/action";
import Swal from 'sweetalert2'

function App() {
  const { cart } = useSelector((state) => state)
  const dispatch = useDispatch()

  function onCheckout() {
    Swal.fire({
      title: 'Selamat',
      text: 'Checkout Berhasil',
      icon: 'success'
    })
  }

  let total = 0
  for (const item of cart) {
    total += (item.qty * item.price)
  }

  return (
    <div className="fluid-container vh-100">
      <Header />
      <main>
        <div className="fluid-container vh-100 mt-5">
          <div className="row justify-content-center p-3">
            <div className="card-info">
              <h3>Cart ({cart.length} items)</h3>
            </div>
            <div className="col-sm-12 col-md-8 mb-4">
              {cart.map((item) => (
                <Card className="card mb-1" key={item.id}>
                  <div className="card-body d-flex justify-content-start flex-wrap">
                    <div className="col-sm-12 col-md-2 mb-3">
                      <img className="img-fluid" src={item.image} alt="baju_satu" />
                    </div>
                    <div className="col-sm-12 col-md-8 mb-4 ms-3 d-flex flex-column item-info">
                      <div className="col-12 d-flex justify-content-between">
                        <div>
                          <h5>{item.item_name}</h5>
                          <span>SHIRT: {item.color}</span><br />
                          <span>COLOR: {item.color}</span><br />
                          <span>SIZE: {item.size}</span>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <div className="d-flex justify-content-center quantity_item">
                            <Button disabled={!(item.qty)} onClick={() => { dispatch(decreaseQty(item)) }} classname="button_minus"></Button>
                            <span>{item.qty}</span>
                            <Button onClick={() => { dispatch(addQty(item)) }} classname="button_plus"></Button>
                          </div>
                          <p className="">(Note, {item.qty} pcs)</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-3 flex-wrap">
                        <div className="col-sm-12 col-lg-8 d-flex justify-content-start mb-3">
                          <Button onClick={() => { dispatch(removeItem(item)) }} classname="button_ctrl">
                            <img src={trash} alt="icon" />
                            <span className="ms-3 fs-6">Remove Item</span>
                          </Button>
                          <Button onClick={() => dispatch(addWhislist(item))} classname="button_ctrl ms-4">
                            <img src={item.like ? love : love_blank} alt="icon_2" />
                            <span className="ms-2 fs-6">Move To Wish List</span>
                          </Button>
                        </div>
                        <div className="col-sm-12 col-lg-4 d-flex justify-content-end">
                          <span className="price_item">Rp {item.qty * item.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="col-sm-12 col-md-4">
              <div>
                <Card className="card">
                  <div className="card-info">
                    <h3>The total amount of</h3>
                    <table>
                      <tbody>
                        <tr>
                          <td>Temporary amount</td>
                          <td>Rp {total}</td>
                        </tr>
                        <tr>
                          <td>Shopping</td>
                          <td>Gratis</td>
                        </tr>
                        <hr />
                        <tr>
                          <th>The total amount of <br /> (Including VAT)</th>
                          <th>Rp {total} </th>
                        </tr>
                      </tbody>
                    </table>
                    <Button onClick={onCheckout} classname="button_checkout mt-4">GO TO CHECKOUT</Button>
                  </div>
                </Card>
              </div>
              <Card className="card mt-3">
                <div className="d-flex justify-content-between p-2">
                  <p>add discount code (optional)</p>
                  <div><img className="img-fluid" src={caretDown} alt="iconDown" /></div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;
