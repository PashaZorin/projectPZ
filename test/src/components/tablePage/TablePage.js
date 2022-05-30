import React from "react";
import Button from "../buttons/Button";
import "./tablePage.scss";
import { ReactComponent as Svg } from "../svg/delete.svg";
import { useDispatch } from "react-redux";
import { invoiseAddress } from "../../store/redusers/formsSlise";

const TablePage = () => {
  const dispatch = useDispatch();
  const arr = [
    {
      name: "Name",
      company: "company",
      additional: "Additional",
      street: "Street",
      postalCode: "Postal Code",
      country: "Country",
      iban: "IBAN",
      bic: "BIC",
      bankName: "Bank Name",
      fax: "fax",
      email: "E-mail",
      birthday: "Birthday",
      homePage: "Homepage",
    },
    {
      name: "Name",
      company: "company",
      additional: "Additional",
      street: "Street",
      postalCode: "Postal Code",
      country: "Country",
      iban: "IBAN",
      bic: "BIC",
      bankName: "Bank Name",
      fax: "fax",
      email: "E-mail",
      birthday: "Birthday",
      homePage: "Homepage",
    },
  ];

  return (
    <div className='table__conteiner'>
      <Button
        text={"Add"}
        className='button__green'
        onClick={() => {
          dispatch(invoiseAddress());
        }}
      />
      <table className='table'>
        <tbody>
          <tr className='table__header'>
            <th className='table__header-item'></th>
            <th className='table__header-item'>Company</th>
            <th className='table__header-item'>Name</th>
            <th className='table__header-item'>Additional</th>
            <th className='table__header-item'>Streed</th>
            <th className='table__header-item'>Postal Code</th>
            <th className='table__header-item'>Country</th>
            <th className='table__header-item'>IBAN</th>
            <th className='table__header-item'>BIC</th>
            <th className='table__header-item'>Bank Name</th>
            <th className='table__header-item'>Fax</th>
            <th className='table__header-item'>E-mail</th>
            <th className='table__header-item'>Birthday</th>
            <th className='table__header-item'>Homepage</th>
          </tr>
          {arr.map((e, i) => {
            console.log(e, "e");

            return (
              <tr key={i} className='table__content'>
                <td className='table__content-item'>
                  <Svg />
                </td>
                <td className='table__content-item'>{e.company}</td>
                <td className='table__content-item'>{e.name}</td>
                <td className='table__content-item'>{e.additional}</td>
                <td className='table__content-item'>{e.street}</td>
                <td className='table__content-item'>{e.postalCode}</td>
                <td className='table__content-item'>{e.country}</td>
                <td className='table__content-item'>{e.iban}</td>
                <td className='table__content-item'>{e.bic}</td>
                <td className='table__content-item'>{e.bankName}</td>
                <td className='table__content-item'>{e.fax}</td>
                <td className='table__content-item'>{e.email}</td>
                <td className='table__content-item'>{e.birthday}</td>
                <td className='table__content-item'>{e.homePage}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
