#!/bin/sh -l

echo "::debug ::Debug Message"
echo "::warning ::Debug Message"
echo "::error ::Debug Message"

echo "::add-mask::$1"
echo "Hellooo $1"


time=$(date)
echo "::set-output name=time::$time"

echo "::group::Some expandable logs"
echo "some stuff1"
echo "some stuff2"
echo "some stuff3"
echo "::endgroup::"

echo "::set-env name=HOLA::Hey-Hello"

