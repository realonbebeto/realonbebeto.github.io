import {
  SiJupyter, SiHtml5, SiPython, SiJavascript, SiTypescript,
  SiKubernetes, SiReact, SiAmazonaws, SiGooglecloud, 
  SiDocker, SiPrefect, SiTensorflow, SiFastapi, SiElasticsearch,
  SiScikitlearn, SiMicrosoftexcel, SiNumpy, SiDatabricks, SiDvc,
  SiGooglebigquery
} from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { FaJava, FaCode } from "react-icons/fa";
import {FaNode} from "react-icons/fa";
import {DiSpark} from "react-icons/di";


export function returnIcon(language: any) {
  if (RegExp("Jupyter").test(language)) {
    return SiJupyter;
  } else if (RegExp("Python").test(language)) {
    return SiPython;
  } else if (RegExp("HTML").test(language)) {
    return SiHtml5;
  } else if (RegExp("JavaScript").test(language)) {
    return SiJavascript;
  } else if (RegExp("TypeScript").test(language)) {
    return SiTypescript;
  } else if (RegExp("Java").test(language)) {
    return FaJava;
  } else if (RegExp("Ruby").test(language)){
    return DiRuby
  } else if (RegExp("Spark").test(language)){
    return DiSpark
  } else if (RegExp("React").test(language)){
    return SiReact
  } else if (RegExp("Amazon").test(language) || RegExp("AWS").test(language)){
    return SiAmazonaws
  } else if (RegExp("k8s").test(language) || RegExp("Kubernetes").test(language)){
    return SiKubernetes
  } else if (RegExp("GCP").test(language)){
    return SiGooglecloud
  } else if (RegExp("Node").test(language)){
    return FaNode
  } else if (RegExp("Docker").test(language)){
    return SiDocker
  } else if (RegExp("Prefect").test(language)){
    return SiPrefect
  } else if (RegExp("Tensorflow").test(language)){
    return SiTensorflow
  } else if (RegExp("FastAPI").test(language)){
    return SiFastapi
  } else if (RegExp("Elastic Search").test(language) || RegExp("Elasticsearch").test(language) || RegExp("Elastic search").test(language)){
    return SiElasticsearch
  } else if (RegExp("Scikit-Learn").test(language) || RegExp("scikit learn").test(language)){
    return SiScikitlearn
  } else if (RegExp("Excel").test(language)){
    return SiMicrosoftexcel
  } else if (RegExp("Numpy").test(language) || RegExp("numpy").test(language)){
    return SiNumpy
  } else if (RegExp("Azure Databricks").test(language) || RegExp("Databricks").test(language)){
    return SiDatabricks
  } else if (RegExp("DVC").test(language)){
    return SiDvc
  } else if (RegExp("BigQuery").test(language)){
    return SiGooglebigquery
  }
  else {
    return FaCode;
  }
}