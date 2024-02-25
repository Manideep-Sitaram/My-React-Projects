import React, { useId } from "react";
function InputBox({
  label,
  amount,
  selectCurrency,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  amountInputDisable = false,
}) {
  const uniqueId = useId();
  return (
    <div className="px-2 py-7 bg-white rounded-xl flex flex-wrap justify-between">
      <div className="flex flex-col flex-wrap items-baseline gap-3">
        <label htmlFor={uniqueId}>{label}</label>
        <input
          type="number"
          id={uniqueId}
          disabled={amountInputDisable}
          placeholder="Amount"
          value={String(amount)}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className="flex flex-col flex-wrap items-baseline gap-3">
        <label htmlFor="">Currency Type</label>
        <select
          name=""
          id=""
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          value={selectCurrency}
        >
          {currencyOptions.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
