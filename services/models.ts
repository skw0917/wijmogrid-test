export interface PtnPartnerDetailModel {
  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  strcoId?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  strcoNm?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  splyAllnTpCd?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  rpsNm?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  bizNo?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  bizPtrCd?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  taxnPtrCd?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  bizitNm?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  bizkdNm?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  dlgTelNo?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  crrNm?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  crrTelNo?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  crrMblNo?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  crrEmailAddr?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  gzGrpcoYn?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  zipNo?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  bscAddr?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  dtlAddr?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  addr?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  bscRdNm?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  dtlRdNm?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  rdAddr?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  bldNo?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  dlStsCd?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  accCclCd?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  dlBnCd?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  acnNo?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  deporNm?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  erpSplrNo?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  nmthAccCclCd?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  pmthAccCclCd?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  pgcoId?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  strcoApvYn?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  dlvDlySmsRcvYn?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  mdfDtm?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  mdfrUsrId?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  rgtDtm?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDetailModel
   */
  rgtrUsrId?: string

  /**
   *
   * @type {PtnPartnerDlvFeeModel[]}
   * @memberof PtnPartnerDetailModel
   */
  dlvFee?: PtnPartnerDlvFeeModel[]

  /**
   *
   * @type {PtnPartnerWebCtgModel[]}
   * @memberof PtnPartnerDetailModel
   */
  webCtg?: PtnPartnerWebCtgModel[]
}

/**
 *
 * @export
 * @interface PtnPartnerDlvFeeModel
 */
export interface PtnPartnerDlvFeeModel {
  /**
   *
   * @type {string}
   * @memberof PtnPartnerDlvFeeModel
   */
  strcoId?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDlvFeeModel
   */
  dlvFeeSeq?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDlvFeeModel
   */
  dlvcoCd?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDlvFeeModel
   */
  dlvFeePtrCd?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDlvFeeModel
   */
  dlvFee?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDlvFeeModel
   */
  freDlvStdAm?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDlvFeeModel
   */
  bscValYn?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerDlvFeeModel
   */
  delYn?: string
}

/**
 *
 * @export
 * @interface PtnPartnerWebCtgModel
 */
export interface PtnPartnerWebCtgModel {
  /**
   *
   * @type {string}
   * @memberof PtnPartnerWebCtgModel
   */
  mallId?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerWebCtgModel
   */
  webCtgId?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerWebCtgModel
   */
  strcoId?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerWebCtgModel
   */
  magnRt?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerWebCtgModel
   */
  delYn?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerWebCtgModel
   */
  mdfDtm?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerWebCtgModel
   */
  mdfrUsrId?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerWebCtgModel
   */
  rgtDtm?: string

  /**
   *
   * @type {string}
   * @memberof PtnPartnerWebCtgModel
   */
  rgtrUsrId?: string
}

/**
 *
 * @export
 * @interface ValidationResult
 */
export interface ValidationResult {
  /**
   *
   * @type {boolean}
   * @memberof ValidationResult
   */
  valid?: boolean

  /**
   *
   * @type {string}
   * @memberof ValidationResult
   */
  invalidMessage?: string
}
