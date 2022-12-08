import { Percent } from "@vixelloswap/sdk";
import { ONE_BIPS } from "../../constants";
import { warningSeverity } from "../../utils/prices";
import { ErrorText } from "./styleds";
import React from "react";
/**
 * Formatted version of price impact text with warning colors
 */
export default function FormattedPriceImpact({
  priceImpact,
}: {
  priceImpact?: Percent;
}) {
  return (
    <ErrorText
      fontWeight={500}
      fontSize={14}
      severity={warningSeverity(priceImpact)}
    >
      {priceImpact
        ? priceImpact.lessThan(ONE_BIPS)
          ? "<0.01%"
          : `${priceImpact.toFixed(2)}%`
        : "-"}
    </ErrorText>
  );
}
